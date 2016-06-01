# == Schema Information
#
# Table name: dynamics
#
#  id          :integer          not null, primary key
#  name        :string
#  description :text
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#

class Dynamic < ActiveRecord::Base
  has_many :panel_dynamics, dependent: :destroy
  has_many :panels, through: :panel_dynamics
end
