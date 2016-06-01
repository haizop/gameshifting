# == Schema Information
#
# Table name: panels
#
#  id          :integer          not null, primary key
#  name        :string
#  description :text
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#

class Panel < ActiveRecord::Base
  has_many :canvass_panels
  has_many :canvasses, through: :canvass_panels
  
  has_many :panel_dynamics
  has_many :dynamics, through: :panel_dynamics
end
