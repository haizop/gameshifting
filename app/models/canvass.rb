# == Schema Information
#
# Table name: canvasses
#
#  id          :integer          not null, primary key
#  name        :string
#  description :text
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#

class Canvass < ActiveRecord::Base
  has_many :panels
  has_many :dynamics, through: :panels
end
